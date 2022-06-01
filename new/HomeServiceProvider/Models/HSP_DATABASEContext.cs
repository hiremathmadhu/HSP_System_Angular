using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HomeServiceProvider.Models
{
    public partial class HSP_DATABASEContext : DbContext
    {
        public HSP_DATABASEContext()
        {
        }

        public HSP_DATABASEContext(DbContextOptions<HSP_DATABASEContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<ServiceAuthentication> ServiceAuthentications { get; set; }
        public virtual DbSet<ServiceBooking> ServiceBookings { get; set; }
        public virtual DbSet<ServiceCategory> ServiceCategories { get; set; }
        public virtual DbSet<ServiceOwner> ServiceOwners { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=LAPTOP-1E3ECVKD;database=HSP_DATABASE;trusted_connection=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.CustomerId)
                    .ValueGeneratedNever()
                    .HasColumnName("customer_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("address")
                    .IsFixedLength(true);

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("city")
                    .IsFixedLength(true);

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("customer_name")
                    .IsFixedLength(true);

                entity.Property(e => e.State)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("state")
                    .IsFixedLength(true);

                entity.Property(e => e.ZipCode)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("zip_code")
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<ServiceAuthentication>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("SERVICE_AUTHENTICATION");

                entity.Property(e => e.ServiceauthForgotpassword)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SERVICEAUTH_FORGOTPASSWORD");

                entity.Property(e => e.ServiceauthLogin)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("SERVICEAUTH_LOGIN");

                entity.Property(e => e.ServiceauthPassword)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SERVICEAUTH_PASSWORD");

                entity.Property(e => e.ServiceauthResetpassword)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SERVICEAUTH_RESETPASSWORD");

                entity.Property(e => e.ServiceauthUsername)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SERVICEAUTH_USERNAME");
            });

            modelBuilder.Entity<ServiceBooking>(entity =>
            {
                entity.HasKey(e => e.Serviceid)
                    .HasName("PK__SERVICE___CE63E0768A816D5D");

                entity.ToTable("SERVICE_BOOKING");

                entity.Property(e => e.Serviceid)
                    .ValueGeneratedNever()
                    .HasColumnName("SERVICEID");

                entity.Property(e => e.ServiceBookingaddress)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("SERVICE_BOOKINGADDRESS");

                entity.Property(e => e.ServiceBookingdate)
                    .HasColumnType("date")
                    .HasColumnName("SERVICE_BOOKINGDATE");

                entity.Property(e => e.ServiceContactnum)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("SERVICE_CONTACTNUM");

                entity.Property(e => e.ServiceItemnum).HasColumnName("SERVICE_ITEMNUM");

                entity.Property(e => e.ServicePaymenttype)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SERVICE_PAYMENTTYPE");
            });

            modelBuilder.Entity<ServiceCategory>(entity =>
            {
                entity.HasKey(e => e.Serviceid)
                    .HasName("PK__SERVICE___CE63E076134E2E59");

                entity.ToTable("SERVICE_CATEGORIES");

                entity.Property(e => e.Serviceid)
                    .ValueGeneratedNever()
                    .HasColumnName("SERVICEID");

                entity.Property(e => e.ServiceAddress)
                    .HasMaxLength(125)
                    .IsUnicode(false)
                    .HasColumnName("SERVICE_ADDRESS");

                entity.Property(e => e.Servicecontactnum)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("SERVICECONTACTNUM");

                entity.Property(e => e.Servicemail)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("SERVICEMAIL");

                entity.Property(e => e.Servicetype)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("SERVICETYPE");
            });

            modelBuilder.Entity<ServiceOwner>(entity =>
            {
                entity.ToTable("SERVICE_OWNER");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(225)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.Enterprisesname)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Ownercontact)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ownercontact");

                entity.Property(e => e.Serviceownername)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("serviceownername");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
