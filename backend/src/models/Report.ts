import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

class Report extends Model {
  public id!: number;
  public userId!: number;
  public startupName!: string;
  public problemStatement!: string;
  public solution!: string;
  public industry!: string;
  public targetAudience!: string;
  public revenueModel!: string;
  public country!: string;
  public startupStage!: string;
  public marketValidation!: string;
  public strengths!: string[];
  public weaknesses!: string[];
  public opportunities!: string[];
  public threats!: string[];
  public competitionAnalysis!: string;
  public revenuePotential!: string;
  public investorScore!: number;
  public innovationScore!: number;
  public suggestions!: string[];
  public createdAt!: Date;
  public updatedAt!: Date;
}

Report.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    startupName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    problemStatement: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    solution: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    targetAudience: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    revenueModel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startupStage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    marketValidation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    strengths: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    weaknesses: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    opportunities: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    threats: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    competitionAnalysis: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    revenuePotential: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    investorScore: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    innovationScore: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    suggestions: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      defaultValue: [],
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'reports',
    timestamps: true,
  }
);

User.hasMany(Report, { foreignKey: 'userId', onDelete: 'CASCADE' });
Report.belongsTo(User, { foreignKey: 'userId' });

export default Report;