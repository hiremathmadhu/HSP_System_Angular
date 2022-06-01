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
    public class ServiceCategoryController : ControllerBase
    {
        private ServiceCategoryRepository ServiceCategoryRepository;
        public ServiceCategoryController()
        {
            ServiceCategoryRepository = new ServiceCategoryRepository();
        }
        [HttpGet, Route("GetAllServiceCategories")]
        public IActionResult Getall()
        {
            return StatusCode(200, ServiceCategoryRepository.GetServiceCategory());
        }
    }
}
