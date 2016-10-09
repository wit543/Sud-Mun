import jess.JessException;
import jess.Rete;
import jess.Value;

public class RD19 extends AgriculturalProduct {
	
	public RD19(int waterLevel) {
		super(waterLevel);
	}
	
	@Override
	public int canPlanted() {
		try {
	        Rete r = new Rete();
	        r.batch(Server.clp);
	        Value v = r.eval("(RD19 "+this.getWaterLevel()+")");
	        return v.intValue(r.getGlobalContext()); 
	    } catch (JessException ex) {
	        System.err.println(ex);
	    }
		return 0;
	}

}
