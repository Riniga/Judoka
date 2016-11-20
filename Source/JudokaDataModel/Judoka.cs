using System.Collections.Generic;

namespace JudokaDataModel
{
    public class Judoka
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Personnumber { get; set; }
        public Club Club { get; set; }
    }
}
