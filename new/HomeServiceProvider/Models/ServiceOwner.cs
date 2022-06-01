using System;
using System.Collections.Generic;

#nullable disable

namespace HomeServiceProvider.Models
{
    public partial class ServiceOwner
    {
        public int Id { get; set; }
        public string Serviceownername { get; set; }
        public string Enterprisesname { get; set; }
        public string Ownercontact { get; set; }
        public string Address { get; set; }
    }
}
