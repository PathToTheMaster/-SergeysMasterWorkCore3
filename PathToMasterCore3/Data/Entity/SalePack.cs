using PathToMasterCore3.Data.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PathToTheMaster.Web.Data.Entity
{
    public class SalePack
    {
        [Key]
        public int Id { get; set; }

        public int PackageId { get; set; }

        public int PatientId { get; set; }

        public int AssistantId { get; set; }

        [ForeignKey(nameof(PackageId))]
        public virtual Package Package { get; set; }

        [ForeignKey(nameof(PatientId))]
        public virtual Patient Patient { get; set; }

        [ForeignKey(nameof(AssistantId))]
        public virtual Assistant Assistant { get; set; }

        

    }
}
