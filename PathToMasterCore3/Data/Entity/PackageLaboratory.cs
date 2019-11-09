using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PathToTheMaster.Web.Data.Entity
{
    public class PackageLaboratory
    {
        [Key]
        public int AnalysisId { get; set; }

        [Key]
        public int LaboratoryId { get; set; }

        [ForeignKey(nameof(AnalysisId))]
        public virtual Analysis Analysis { get; set; }

        [ForeignKey(nameof(LaboratoryId))]
        public virtual Laboratory Laboratory { get; set; }
    }
}
