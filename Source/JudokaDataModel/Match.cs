namespace JudokaDataModel
{
    public class Match
    {
        public int Id { get; set; }
        public Judoka White{ get; set; }
        public Judoka Blue { get; set; }
        public string Score { get; set; } //*Score in matchs(9 chars)  IWYS_IWYS(I= Ippons, W= waza Ari, Y= Yoko, S= Shido)
        public Category Category { get; set; }
    }
}
