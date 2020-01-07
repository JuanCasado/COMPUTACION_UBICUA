SYSTEMD_PATH=/lib/systemd/system

sudo cp ./smart-bed.service $SYSTEMD_PATH
sudo chmod 644 $SYSTEMD_PATH
sudo systemctl daemon-reload
sudo systemctl enable smart-bed.service

