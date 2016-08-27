class ContributionSerializer < ActiveModel::Serializer
  attributes :id, :author_name, :body, :created_at
end
