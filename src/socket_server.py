import socket

# SERVER_HOST = '0.0.0.0'
# SERVER_PORT = 9090

class server:
    def __init__(self,port,address='0.0.0.0'):
        self.server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server_socket.bind((address, port))
        self.server_socket.listen()
        self.data = "Nothing Yet!"

    async def loop(self):
        while True:
            client_connection, client_address = self.server_socket.accept()

            dataFromClient = client_connection.recv(1024).decode()

            print(f"Data requested: {dataFromClient}")
            print(f"Sending:\n{self.data}")

            if "dataPLS" in dataFromClient:
                client_connection.send(self.data.encode())
                client_connection.close()

    def set_data(self,text):
        self.data=text

    def close_socket(self):
        self.server_socket.close()