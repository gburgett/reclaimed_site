Vagrant.require_version ">= 1.3.5"

Vagrant.configure(2) do |config|
  config.vm.provider "virtualbox" do |v| 
  	v.memory = 2048
    v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate//vagrant", "1"]
  end

  config.vm.box = "ubuntu/vivid64"

  config.vm.network "forwarded_port", guest: 3333, host: 3333
  config.vm.network "forwarded_port", guest: 35729, host: 35729
  
  config.vm.provision "file", source: "~/.gitconfig", destination: "~/.gitconfig"
  config.vm.provision "shell", path: "./provision.sh"
end