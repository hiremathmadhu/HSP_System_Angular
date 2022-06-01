using HomeServiceProvider.Models;
using System.Collections.Generic;
using System.Linq;

namespace HomeServiceProvider.Repositories
{
    public class ServiceCategoryRepository
    {
        private readonly HSP_DATABASEContext context;
        public ServiceCategoryRepository()
        {
            context = new HSP_DATABASEContext();
        }
        public void AddServiceCategory(ServiceCategory servc)
        {
            context.ServiceCategories.Add(servc);
            context.SaveChanges();
        }
        public List<ServiceCategory> GetServiceCategory()
        {
            return context.ServiceCategories.ToList(); //return list of customers
        }
        public ServiceCategory GetServiceCategory(int id) //get customer details using customerid
        {
            ServiceCategory servc = context.ServiceCategories.Find(id);
            return servc;
        }
        public void EditServiceCtegory(ServiceCategory servc) //edit row
        {
            context.ServiceCategories.Update(servc);
            context.SaveChanges();
        }
        public void DeleteServiceCategory(int id) //Delete customer row
        {
            ServiceCategory servc = context.ServiceCategories.Find(id);
            context.ServiceCategories.Remove(servc);
            context.SaveChanges();

        }
    }
}
