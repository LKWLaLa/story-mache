class Author < ActiveRecord::Base
  has_many :contributions
  has_many :stories, through: :contributions
end
