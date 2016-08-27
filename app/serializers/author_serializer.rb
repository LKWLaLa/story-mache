class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :contributions
    class ContributionSerializer < ActiveModel::Serializer
      attributes :body, :created_at, :story
    end

end
