import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
	public static String clp;
    public static void main(String[] args) throws Exception {
    	clp = args[0];
        System.out.println("The Expert System server is running.");
        int clientNumber = 0;
        ServerSocket listener = new ServerSocket(5000);
        try {
            while (true) {
                new Expertizer(listener.accept(), clientNumber++).start();
            }
        } finally {
            listener.close();
        }
    }

    private static class Expertizer extends Thread {
        private Socket socket;
        private int clientNumber;

        public Expertizer(Socket socket, int clientNumber) {
            this.socket = socket;
            this.clientNumber = clientNumber;
            log("New connection with client# " + clientNumber + " at " + socket);
        }

        public void run() {
            try {
                BufferedReader in = new BufferedReader(
                        new InputStreamReader(socket.getInputStream()));
                PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                while (true) {
                    String input = in.readLine();
                    System.out.println(input);
                    if (input == null || input.equals(".")) {
                        break;
                    }
                    out.println(cal(input));
                }
            } catch (IOException e) {
                log("Error handling client# " + clientNumber + ": " + e);
            } finally {
                try {
                    socket.close();
                } catch (IOException e) {
                    log("Couldn't close a socket, what's going on?");
                }
                log("Connection with client# " + clientNumber + " closed");
            }
        }
        
        private String cal(String waterLevel) {
        	return App.checkRiceVarieties(Integer.parseInt(waterLevel));
        }

        private void log(String message) {
            System.out.println(message);
        }
    }
}