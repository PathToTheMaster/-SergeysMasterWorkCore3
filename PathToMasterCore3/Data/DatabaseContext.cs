using Microsoft.EntityFrameworkCore;
using PathToMasterCore3.Data.Entity;
using PathToTheMaster.Web.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathToMasterCore3.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
            //створення бази даних
            Database.EnsureCreated();
        }

        public DbSet<Patient> Patient { get; set; }

        public DbSet<SalePack> SalePack { get; set; }

        public DbSet<Package> Package { get; set; }

        public DbSet<Laboratory> Laboratory { get; set; }

        public DbSet<PackageLaboratory> PackageLaboratory { get; set; }

        public DbSet<Assistant> Assistant { get; set; }

        public DbSet<Norm> Norm { get; set; }

        public DbSet<Package> Analysis { get; set; }

        public DbSet<Addresses> Addresses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Для створення звязків N до M
            modelBuilder.Entity<PackageLaboratory>()
                .HasKey(c => new { c.PackageId, c.LaboratoryId });
        }
    }
}
