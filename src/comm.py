from queue import Queue

class DataComm:
    def __init__(self):
        self.data_queue = Queue()

    def put_data(self, n_objects, start_time, start_objects, battery):
        data_dict = {}
        data_dict["n_objects"] = n_objects
        data_dict["start_time"] = start_time
        data_dict["start_objects"] = start_objects
        data_dict["battery"] = battery

        self.data_queue.put(data_dict)

    def get_data(self):
        return self.data_queue.get()

    def get_size(self):
        self.data_queue.qsize()

    def clear_all(self):
        self.data_queue.queue.clear()

data_comm = DataComm()