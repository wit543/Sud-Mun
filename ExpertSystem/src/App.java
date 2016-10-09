import java.util.Arrays;

public class App {
	public static String checkRiceVarieties(int waterLevel) {
		int[] array = new int[4];
		RD5 rd = new RD5(waterLevel);
		P601 p = new P601(waterLevel);
		TPG161 tpg = new TPG161(waterLevel);
		RD19 rd19 = new RD19(waterLevel);
		array[0] = rd.canPlanted();
		array[1] = p.canPlanted();
		array[2] = tpg.canPlanted();
		array[3] = rd19.canPlanted();
		return Arrays.toString(array);
	}
}
