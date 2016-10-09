
public abstract class AgriculturalProduct {
	private int waterLevel;
	
	protected AgriculturalProduct(int waterLevel) {
		this.waterLevel = waterLevel;
	}
	
	public abstract int canPlanted();
	
	public int getWaterLevel() {
		return waterLevel;
	}
	
	public void setWaterLevel(int waterLevel) {
		this.waterLevel = waterLevel;
	}
}
