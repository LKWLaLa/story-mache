class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :stories
  class StorySerializer < ActiveModel::Serializer
    attributes :title, :id
  end

end
