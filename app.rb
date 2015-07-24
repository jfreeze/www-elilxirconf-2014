require 'sinatra'
#set :bind, '0.0.0.0'
get '/' do
  send_file File.join(settings.public_folder, 'index.html')
  #redirect '/index.html'
end

get '/2014' do
  send_file File.join(settings.public_folder, '2014.html')
end
