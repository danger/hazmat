import shell, { exec, cd } from 'shelljs'
 
exec("git clone https://github.com/danger/peril.git")
cd("peril")
exec("yarn")

// TODO: ENV vars?

exec("git clone https://github.com/danger/peril.systems.git")
cd("peril.systems")
exec("yarn")

// TODO: ENV vars?
