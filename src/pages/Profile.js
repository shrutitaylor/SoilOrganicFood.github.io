import React, { useState, useEffect } from 'react';

const Profile = ({ username }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    activityLevel: '',
    dietaryPreferences: '',
    healthGoals: '',
    selectedGoal: '',
    dietPlan: '', // Added dietPlan field to store generated diet plan
  });
  const [editMode, setEditMode] = useState(false);
  const [mealType, setMealType] = useState('');
  const [calorieRequirement, setCalorieRequirement] = useState('');
  const [mealPlan, setMealPlan] = useState('');

  useEffect(() => {
    // Fetch user details from localStorage when component mounts
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setProfile(user);
    }
  }, []);

  useEffect(() => {
    // Update diet plan when selectedGoal changes
    if (editMode) {
      generateDietPlan(profile.selectedGoal, profile).then((generatedDietPlan) => {
        setProfile((prevProfile) => ({ ...prevProfile, dietPlan: generatedDietPlan }));
      });
    }
  }, [profile.selectedGoal, editMode]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Update user details in localStorage
    localStorage.setItem('user', JSON.stringify(profile));
    // Generate diet plan based on the selected goal
    const generatedDietPlan = await generateDietPlan(profile.selectedGoal, profile);
    // Update diet plan in state
    setProfile((prevProfile) => ({ ...prevProfile, dietPlan: generatedDietPlan }));
    // Disable edit mode
    setEditMode(false);
    // Provide a visual cue for successful update
    alert('Profile updated successfully!');
  };

  const handleDelete = () => {
    // Remove user details from localStorage
    localStorage.removeItem('user');
    // Provide a visual cue for successful deletion
    alert('Profile deleted successfully!');
    // Redirect to the homepage or logout
    // Add redirection logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleChangeMealPlanner = (e) => {
    const { name, value } = e.target;
    if (name === 'mealType') {
      setMealType(value);
    } else if (name === 'calorieRequirement') {
      setCalorieRequirement(value);
    }
  };

  const generateDietPlan = async (selectedGoal, profile) => {
    // Implementation remains the same
  };

  const generateMealPlan = () => {
    // Hardcoded meal plan generation
    // You can implement more advanced logic here, such as calling external APIs or accessing a database
    // For demonstration, let's create a simple mock meal plan based on user's preferences
    let newMealPlan = '';

    // Example meal planning options
    const mealOptions = {
      breakfast: ['Oatmeal', 'Scrambled eggs', 'Smoothie'],
      lunch: ['Grilled chicken salad', 'Quinoa bowl', 'Vegetable stir-fry'],
      dinner: ['Salmon with roasted vegetables', 'Tofu stir-fry', 'Turkey chili'],
    };

    // Example calorie requirements
    const calorieRequirements = {
      sedentary: 2000,
      moderate: 2500,
      active: 3000,
    };

    // Generate meal plan based on user's preferences and calorie requirements
    // For demonstration, let's assume a simple meal plan with fixed options
    newMealPlan += `Daily Meal Plan:\n`;
    Object.keys(mealOptions).forEach((mealType) => {
      newMealPlan += `${mealType}:\n`;
      mealOptions[mealType].forEach((option) => {
        newMealPlan += `- ${option}\n`;
      });
    });
    newMealPlan += `\nCalorie Requirement: ${calorieRequirements[mealType]} kcal`;

    setMealPlan(newMealPlan);
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {username && (
        <>
          {!editMode ? (
            <div className="profile-info">
              <p>Name: {profile.name}</p>
              <p>Email: {profile.email}</p>
              <p>Age: {profile.age}</p>
              <p>Weight: {profile.weight}</p>
              <p>Height: {profile.height}</p>
              <p>Activity Level: {profile.activityLevel}</p>
              <p>Dietary Preferences: {profile.dietaryPreferences}</p>
              <p>Health Goals: {profile.healthGoals}</p>
              <p>Selected Goal: {profile.selectedGoal}</p>
              <p>Diet Plan:</p>
              <pre>{profile.dietPlan}</pre> {/* Display generated diet plan */}
              <button className="profile-button" onClick={handleEdit}>Edit</button>
              <button className="profile-button" onClick={handleDelete}>Delete</button>
            </div>
          ) : (
            <form onSubmit={handleUpdate}>
              {/* Input fields for profile information */}
              <input type="text" name="name" value={profile.name} onChange={handleChange} />
              <input type="email" name="email" value={profile.email} onChange={handleChange} />
              <input type="number" name="age" value={profile.age} onChange={handleChange} />
              <input type="number" name="weight" value={profile.weight} onChange={handleChange} />
              <input type="number" name="height" value={profile.height} onChange={handleChange} />
              <input type="text" name="activityLevel" value={profile.activityLevel} onChange={handleChange} />
              <input type="text" name="dietaryPreferences" value={profile.dietaryPreferences} onChange={handleChange} />
              <input type="text" name="healthGoals" value={profile.healthGoals} onChange={handleChange} />
              {/* Dropdown or radio button for goal setting */}
              <select name="selectedGoal" value={profile.selectedGoal} onChange={handleChange}>
                <option value="">Select Goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="health-improvement">Health Improvement</option>
              </select>
              <button type="submit" className="profile-button">Update</button>
              <button type="button" className="profile-button" onClick={() => setEditMode(false)}>Cancel</button>
            </form>
          )}

          {/* Meal Planner Section */}
          <div className="meal-planner">
            <h3>Meal Planner</h3>
            <p>Select your meal preferences:</p>
            {/* Example dropdown for meal types */}
            <select name="mealType" value={mealType} onChange={handleChangeMealPlanner}>
              <option value="">Select Meal Type</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
            {/* Example input for calorie requirements */}
            <input
              type="number"
              name="calorieRequirement"
              value={calorieRequirement}
              onChange={handleChangeMealPlanner}
              placeholder="Calorie Requirement"
            />
            <button type="button" onClick={generateMealPlan}>Generate Meal Plan</button>
            <pre>{mealPlan}</pre>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
