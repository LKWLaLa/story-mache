class ContributionSerializer < ActiveModel::Serializer
  attributes :id, :author, :body, :timestamps
end
