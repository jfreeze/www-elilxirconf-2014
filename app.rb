require 'sinatra'
set :bind, '0.0.0.0'
get '/' do
  send_file File.join(settings.public_folder, 'index.html')
  #redirect '/index.html'
end

get '/changelog' do
  redirect "/?utm_source=changelog"
end

get '/training' do
  send_file File.join(settings.public_folder, '2016/speakers.html')
end

get '/speakers' do
  send_file File.join(settings.public_folder, '2016/bio.html')
end

get '/bio' do
  send_file File.join(settings.public_folder, '2016/bio.html')
end

get '/coc' do
  send_file File.join(settings.public_folder, '2016/coc.html')
end

get '/2016/venue' do
  send_file File.join(settings.public_folder, '2016/venue.html')
end

get '/2014' do
  send_file File.join(settings.public_folder, '2014.html')
end

get '/2015' do
  send_file File.join(settings.public_folder, '2015.html')
end
