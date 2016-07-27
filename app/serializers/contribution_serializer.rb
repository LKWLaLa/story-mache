class ContributionSerializer < ActiveModel::Serializer
  attributes :id, :author, :body, :created_at
end
