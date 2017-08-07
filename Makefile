APP_NAME:=meteor-search
APP_PORT:=8800
APP_LINK:=http://example.com
TARGET_DIRECTORY:=/home/$(APP_NAME)
DEPLOY_DIRECTORY:=/deploy
SERVER_IP:=1.2.3.4
SERVER_PORT:=0001
TARBALL_NAME:=bundle.tar.gz

SSH_KEY:=~/.ssh/kvm-root
SSH:=-i $(SSH_KEY) root@$(SERVER_IP) -p $(SERVER_PORT)

include ./deploy/makefile
