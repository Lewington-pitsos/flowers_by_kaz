module WorksHelper
  def save_place(cat, work, place)
    # recurisve function
    prev_slot = cat.works.where(position: place - 1)
    if prev_slot.empty? && place > 1
      # if the place is not the first possible place and the previous place slot isn't empty, it should try to slot the category in at the previous place
      if place > 1
        save_place(cat, work, place - 1)
      end
    else
      # otherwise, if the place has been taken it should increment the place of the work with the matching place and keep trying to save it untill we run out of place conflicts, then save the origional place as intended.
      same_place = cat.works.where(position: place)
      if !same_place.empty?
        save_place(cat, same_place.take, place + 1)
      end
      work.update_attribute(:position, place)
    end
  end
end
