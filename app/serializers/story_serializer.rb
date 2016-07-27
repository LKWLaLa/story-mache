class StorySerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :contributions
  class ContributionSerializer < ActiveModel::Serializer
    attributes :author, :body, :timestamps
  end

  has_many :genres
  class GenreSerializer < ActiveModel::Serializer
    attributes :name
  end

end
