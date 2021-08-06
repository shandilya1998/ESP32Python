from urllib.request import Request, urlopen
import cv2
import numpy as np

def test_stream(url):
    stream = urlopen(url)
    bytes = b''
    while True:
        bytes += stream.read(1024)
        a = bytes.find(b'\xff\xd8')
        b = bytes.find(b'\xff\xd9')
        try:
            if a != -1 and b != -1:
                jpg = bytes[a:b+2]
                bytes = bytes[b+2:]
                i = cv2.imdecode(np.fromstring(jpg, dtype=np.uint8), cv2.IMREAD_COLOR)
                cv2.imshow('i', i)
                if cv2.waitKey(1) & 0xFF == ord('q'):
                    break

        except cv2.error:
            pass

def sample_images(url, assets_dir, num_images = 20):
    stream = urlopen(url)
    bytes = b'' 
    count = 0
    while True:
        bytes += stream.read(1024)
        a = bytes.find(b'\xff\xd8')
        b = bytes.find(b'\xff\xd9')
        try:
            if a != -1 and b != -1: 
                jpg = bytes[a:b+2]
                bytes = bytes[b+2:]
                i = cv2.imdecode(np.fromstring(jpg, dtype=np.uint8), cv2.IMREAD_COLOR)
                cv2.imwrite(os.path.join('assets_dir', str(count)+'.png'), i)
                count += 1
        except cv2.error:
            pass
        if count > num_images:
            break


if __name__ == '__main__':
    url = 'http://192.168.29.183:81/stream'
    test_stream(url)
