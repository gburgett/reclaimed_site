#!/bin/bash

#install ruby
curl -o rubystack-2.3.0-0-dev.run https://downloads.bitnami.com/files/stacks/rubystack/2.3.0-0/bitnami-rubystack-2.3.0-0-dev-linux-x64-installer.run
chmod +x rubystack-2.3.0-0-dev.run
./rubystack-2.3.0-0-dev.run --mode unattended --disable-components varnish,phpmyadmin,rvm

#install ruby dev headers
apt-get install -y g++ ruby-dev zlib1g-dev

#install wagon
gem install locomotivecms_wagon