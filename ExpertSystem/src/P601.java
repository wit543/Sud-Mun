import jess.JessException;
import jess.Rete;
import jess.Value;

public class P601 extends AgriculturalProduct {
	
	public P601(int waterLevel) {
		super(waterLevel);
	}

	@Override
	public int canPlanted() {
		try {
	        Rete r = new Rete();
	        r.batch(Server.clp);
	        Value v = r.eval("(P601 "+this.getWaterLevel()+")");
	        return v.intValue(r.getGlobalContext()); 
	    } catch (JessException ex) {
	        System.err.println(ex);
	    }
		return 0;
	}

}
