import cv2

def aruco_init():
    aruco_dict = cv2.aruco.getPredefinedDictionary(cv2.aruco.DICT_4X4_50)
    aruco_params = cv2.aruco.DetectorParameters()

    detector = cv2.aruco.ArucoDetector(aruco_dict, aruco_params)
    return detector

def detect(frame, detector):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    corners, ids, rejected = detector.detectMarkers(gray)

    # Draw detected markers on the frame
    print(corners)
    if ids is not None:
        cv2.aruco.drawDetectedMarkers(frame, corners, ids)

    return corners, ids, frame