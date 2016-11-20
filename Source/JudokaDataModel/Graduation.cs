using System;

namespace JudokaDataModel
{
    public class Graduation
    {
        public int Id { get; set; }
        public Judoka Judoka { get; set; }
        public Grade Grade { get; set; }
        public DateTime Earned { get; set; }
    }
}
