import React, { useEffect, useState } from 'react';
import './Profile.css';

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
    
  <>
  <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
    <div className="header_section">
      <img src='https://images.unsplash.com/photo-1498522271744-cdd435c13f24?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" />
      <h1>My Profile</h1>
    </div>
  </section>
  <div className="profile-container">
    {username && (
      <>
        {!editMode ? (
          <div className="profile-info">
            <div className="personal-details">
              <h3>Personal Details</h3>
              <p>Name: {profile.name}</p>
              <p>Email: {profile.email}</p>
            </div>
            <div className="health-details">
              <h3 >Health Details</h3>
              <p>Age: {profile.age}</p>
              <p>Weight (kg): {profile.weight}</p>
              <p>Height (cm) {profile.height}</p>
              <p>Activity Level: {profile.activityLevel}</p>
              <p>Dietary Preferences: {profile.dietaryPreferences}</p>
              <p>Health Goals: {profile.healthGoals}</p>
              <p>Selected Goal: {profile.selectedGoal}</p>
              <p>Diet Plan:</p>
              <pre>{profile.dietPlan}</pre>
            </div>
            <div className='buttons-div'>
            <button className="profile-button edit-button" onClick={handleEdit}>Edit</button>
            <button className="profile-button delete-button" onClick={handleDelete}>Delete Profile</button>
            </div>
          </div>
        ) : (
          <div className="profile-info">
          <div className="personal-details">
          <form className='edit-form' onSubmit={handleUpdate}>
            {/* Input fields for profile information */}
            {/* Personal Details */}
            <div style={{flexDirection:"row"}}>
              <label>Name: </label>
              <input type="text" name="name" value={profile.name} onChange={handleChange} />
            </div>
            <div style={{flexDirection:"row"}}>
              <label>Email: </label>
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
            </div>
            <div style={{flexDirection:"row"}}>
              <label>Age: </label>
            {/* Health Details */}
            <input type="number" name="age" value={profile.age} onChange={handleChange} />
            </div>
            <div style={{flexDirection:"row"}}>
              <label>Weight (kg): </label>
            <input type="number" name="weight" value={profile.weight} onChange={handleChange} />
            </div>
            <div style={{flexDirection:"row"}}>
              <label>Height (cm): </label>
            <input type="number" name="height" value={profile.height} onChange={handleChange} />
            </div>
            <div style={{flexDirection:"row"}}>
              <label>Activity Level: </label>
            <input type="text" name="activityLevel" value={profile.activityLevel} onChange={handleChange} />
            </div>
            <div style={{flexDirection:"row"}}>
              <label>Dietary Preference: </label>
            <input type="text" name="dietaryPreferences" value={profile.dietaryPreferences} onChange={handleChange} />
            </div>
            <div style={{flexDirection:"row"}}>
              <label>Health Goals: </label>
            <input type="text" name="healthGoals" value={profile.healthGoals} onChange={handleChange} />
            </div>
            
            
            <div style={{flexDirection:"row"}}>
              <label>Health Goals: </label>
            {/* Dropdown or radio button for goal setting */}
            <select name="selectedGoal" value={profile.selectedGoal} onChange={handleChange}>
              <option value="">Select Goal</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="muscle-gain">Muscle Gain</option>
              <option value="health-improvement">Health Improvement</option>
            </select>
            </div>
            <button type="submit" className="profile-button edit-button">Update</button>
            <button type="button" className="profile-button cancel-button" onClick={() => setEditMode(false)}>Cancel</button>
          </form>
          </div>
          </div>
        )}
         {/* Meal Planner Section */}
         <div className="profile-info">
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
            <select name="calorieRequirement" value={calorieRequirement} onChange={handleChangeMealPlanner}>
              <option value="">Calorie Requirement</option>
              <option value="2000">2000</option>
              <option value="4000">4000</option>
              <option value="6000">6000</option>
            </select>
            {/* <input
              type="number"
              name="calorieRequirement"
              value={calorieRequirement}
              onChange={handleChangeMealPlanner}
              placeholder="Calorie Requirement"
            /> */}
            <button className='edit-button' style={{alignSelf:'center'}} type="button" onClick={generateMealPlan}>Generate Meal Plan</button>
            <pre>{mealPlan}</pre>
          </div>
          </div>
      </>
    )}
  </div>


    </>
  );
};

export default Profile;






