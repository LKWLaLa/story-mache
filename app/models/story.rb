class Story < ActiveRecord::Base
  has_many: :contributions
  has_many: :story_genres
  has_many: :genres, through: :story_genres
end
