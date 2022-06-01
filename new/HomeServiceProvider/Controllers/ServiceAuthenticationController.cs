using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Threading.Tasks;
using HomeServiceProvider.Repositories;
using HomeServiceProvider.Models;

namespace HomeServiceProvider.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceAuthenticationController: ControllerBase
    {
        private ServiceAuthenticationRepository ServiceAuthenticationRepository;
        public ServiceAuthenticationController()
        {
            ServiceAuthenticationRepository = new ServiceAuthenticationRepository();
        }
        [HttpGet, Route("GetAllServiceAuthentications")]
        public IActionResult Getall()
        {
            return StatusCode(200, ServiceAuthenticationRepository.GetServiceAuthentication());
        }
        [HttpGet,Route("GetServiceAuthenticationByName/{name}")]
        public IActionResult Get(string name)
        {
            return StatusCode(200, ServiceAuthenticationRepository.GetServiceAuthentication(name));
        }

        [HttpPost, Route("AddServiceAuthentication")]//adding customer details
        public IActionResult Add(ServiceAuthentication serv)// Customer is your  model name and cust is parameter which we are passing
        {
            ServiceAuthenticationRepository.AddServiceAuthentication(serv);
            return StatusCode(200, "record added");
        }
        [HttpPut,Route("ServiceAuthenticationController")]
        public IActionResult Get(ServiceAuthentication serv)
        {
            ServiceAuthenticationRepository.AddServiceAuthentication(serv);
            return StatusCode(200, "record modified");
        }
        [HttpDelete, Route("DeleteServiceAuthentication")]//deleting the record
        public IActionResult Delete(int id)
        {
            ServiceAuthenticationRepository.DeleteServiceAuthentication(id);
            return StatusCode(200, "record deleted");
        }
    }
}
