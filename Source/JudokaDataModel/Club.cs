using System.Collections.Generic;

namespace JudokaDataModel
{
    public class Club
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public District District { get; set; }
        public ICollection<Judoka> Judokas { get; set; }

    }
}
