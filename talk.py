import serial
import time
import socket

TCP_IP='127.0.0.1'
TCP_PORT = 3007

sock = socket.socket(socket.AF_INET,
							socket.SOCK_STREAM)
sock.connect((TCP_IP, TCP_PORT));
buffer = 1024



import pygame
from pygame.locals import *

ser = serial.Serial("/dev/ttyACM0")
ser.baudrate = 9600

def stop():
	ser.write('4')
	time.sleep(.5)

def forward():
	ser.write('0')

def backward():
	ser.write('1')

def left():
	ser.write('0')
	time.sleep(.2)
	ser.write('2')
	time.sleep(.4)
	ser.write('4')

def backLeft():
	ser.write('1')
	time.sleep(.2)
	ser.write('5')
	time.sleep(.4)
	ser.write('4')


def right():
	ser.write('0')
	time.sleep(.2)
	ser.write('3')	
	time.sleep(.4)
	ser.write('4')

def backRight():
	ser.write('1')
	time.sleep(.2)
	ser.write('6')	
	time.sleep(.4)
	ser.write('4')

def fire():
	ser.write('7')

def rreload():
	ser.write('8')
	

while True:
	i=sock.recv(1024) #raw_input()
	if (i!=None):
		print (i)
	if (i == "w"):
		forward()
	if (i == "s"):
		backward()
	if (i == "a"):
		left()
	if (i == "d"):
		right()
	if (i == "e"):
		stop()
	if (i == "z"):
		backLeft()
	if (i == "c"):
		backRight()
	if (i == "f"):
		fire()
	if (i == "r"):
		rreload()
