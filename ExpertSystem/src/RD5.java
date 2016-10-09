import jess.JessException;
import jess.Rete;
import jess.Value;

public class RD5 extends AgriculturalProduct {
	
	public RD5(int waterLevel) {
		super(waterLevel);
	}
	
	@Override
	public int canPlanted() {
	    try {
	        Rete r = new Rete();
	        r.batch(Server.clp);
	        Value v = r.eval("(RD5 "+this.getWaterLevel()+")");
	        return v.intValue(r.getGlobalContext()); 
	    } catch (JessException ex) {
	        System.err.println(ex);
	    }
		return 0;
	}
	
}
