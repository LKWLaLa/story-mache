class Story < ActiveRecord::Base
  
  has_many :contributions  
  accepts_nested_attributes_for :contributions, allow_destroy: true

end
