class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :last_updated, :total_contributions

  has_many :contributions
  class ContributionSerializer < ActiveModel::Serializer
    attributes :author, :body, :created_at
  end


end
