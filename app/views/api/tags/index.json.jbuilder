@tags.each do |tag|
  json.set! tag.id do
    json.name tag.name
    json.id tag.id
  end
end
