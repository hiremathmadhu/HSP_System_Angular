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
    public class ServiceOwnerController : ControllerBase
    {
        private ServiceOwnerRepository ServiceOwnerRepository;
        public ServiceOwnerController()
        {
            ServiceOwnerRepository = new ServiceOwnerRepository();
        }
        [HttpGet, Route("GetAllServiceOwners")]
        public IActionResult Getall()
        {
            return StatusCode(200, ServiceOwnerRepository.GetServiceOwner());
        }
        [HttpGet, Route("GetOwnerById/{id}")]
        public IActionResult Get(int id)
        {
            return StatusCode(200, ServiceOwnerRepository.GetServiceOwner(id));
        }
        [HttpPut,Route("AddServiceOwner")]
        public IActionResult Get(ServiceOwner servo)
        {
            ServiceOwnerRepository.AddServiceOwner(servo);
            return StatusCode(200, "record edited");
        }
        [HttpPost, Route("GetOwnerById/{id}")]
        public IActionResult Add(int id)
        {
            return StatusCode(200, ServiceOwnerRepository.GetServiceOwner(id));

        }
        [HttpDelete, Route("DeleteServiceId")]//deleting the record
        public IActionResult Delete(int id)
        {
            ServiceOwnerRepository.DeleteServiceOwner(id);
            return StatusCode(200, "record deleted");
        }
    }
}

