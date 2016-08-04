class Story < ActiveRecord::Base
  
  has_many :contributions  
  accepts_nested_attributes_for :contribution, allow_destroy: true

end
