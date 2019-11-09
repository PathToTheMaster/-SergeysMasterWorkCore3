using Microsoft.EntityFrameworkCore;
using PathToMasterCore3.Data.Entity;
using PathToTheMaster.Web.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PathToTheMaster.Web.Data
{
    public class DatabaseContext:DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
            Database.EnsureCreated();
            Database.Migrate();
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
    }
}
