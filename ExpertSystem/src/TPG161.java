import jess.JessException;
import jess.Rete;
import jess.Value;

public class TPG161 extends AgriculturalProduct {
	
	public TPG161(int waterLevel) {
		super(waterLevel);
	}
	
	@Override
	public int canPlanted() {
		try {
	        Rete r = new Rete();
	        r.batch(Server.clp);
	        Value v = r.eval("(TPG161 "+this.getWaterLevel()+")");
	        return v.intValue(r.getGlobalContext()); 
	    } catch (JessException ex) {
	        System.err.println(ex);
	    }
		return 0;
	}

}
