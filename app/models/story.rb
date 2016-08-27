class Story < ActiveRecord::Base
  has_many :contributions 
  has_many :authors, through: :contributions 
  accepts_nested_attributes_for :contributions, allow_destroy: true

end
