class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :updated_at, :total_contributions

  has_many :contributions
  class ContributionSerializer < ActiveModel::Serializer
    attributes :author_name, :body, :created_at
  end


end
