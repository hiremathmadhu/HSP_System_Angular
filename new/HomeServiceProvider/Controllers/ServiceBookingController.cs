using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeServiceProvider.Repositories;


namespace HomeServiceProvider.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceBookingController : ControllerBase
    {
        private ServiceBookingRepository ServiceBookingRepository;
        public ServiceBookingController()
        {
            ServiceBookingRepository = new ServiceBookingRepository();
        }
        [HttpGet, Route("GetAllServiceBooking")]
        public IActionResult Getall()
        {
            return StatusCode(200, ServiceBookingRepository.GetServiceBooking());
        }
        [HttpGet,Route("GetBookingById/{id}")]
        public IActionResult Get(int id)
        {
            return StatusCode(200, ServiceBookingRepository.GetServiceBooking(id));
        }
        [HttpPost, Route("GetBookingById/{id}")]
        public IActionResult Add(int id)
        {
            return StatusCode(200, ServiceBookingRepository.GetServiceBooking(id));

        }
        [HttpDelete, Route("DeleteServiceId")]//deleting the record
        public IActionResult Delete(int id)
        {
            ServiceBookingRepository.DeleteServiceBooking(id);
            return StatusCode(200, "record deleted");
        }
    }
}
