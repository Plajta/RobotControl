import socket

clientSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
clientSocket.connect(("127.0.0.1", 9090))
try:
    data = "dataPLS"
    clientSocket.send(data.encode())
    dataFromServer = clientSocket.recv(1024)
    print(dataFromServer.decode())
    clientSocket.send("stop".encode())
    clientSocket.close()
except Exception as E:
    print(E)