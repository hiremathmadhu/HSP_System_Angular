using HomeServiceProvider.Models;
using System.Collections.Generic;
using System.Linq;

namespace HomeServiceProvider.Repositories
{
    public class ServiceOwnerRepository
    {
        private readonly HSP_DATABASEContext context;
        public ServiceOwnerRepository()
        {
            context = new HSP_DATABASEContext();
        }
        public void AddServiceOwner(ServiceOwner servo)
        {
            context.ServiceOwners.Add(servo);
            context.SaveChanges();
        }
        public List<ServiceOwner> GetServiceOwner()
        {
            return context.ServiceOwners.ToList(); //return list of customers
        }
        public ServiceOwner GetServiceOwner(int id) //get customer details using customerid
        {
            ServiceOwner servc = context.ServiceOwners.Find(id);
            return servc;
        }
        public void EditServiceOwner(ServiceOwner servc) //edit row
        {
            context.ServiceOwners.Update(servc);
            context.SaveChanges();
        }
        public void DeleteServiceOwner(int id) //Delete customer row
        {
            ServiceOwner servc = context.ServiceOwners.Find(id);
            context.ServiceOwners.Remove(servc);
            context.SaveChanges();

        }
    }
}
